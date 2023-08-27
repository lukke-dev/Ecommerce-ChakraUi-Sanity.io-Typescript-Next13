import React from 'react'
import { QuantityInputProps } from './types'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

export const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  setQuantity,
  disabled = false,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      min: 1,
      max: 20,
      step: 1,
      defaultValue: 1,
      onChange(_, valueAsNumber) {
        if (!disabled) {
          setQuantity(valueAsNumber)
        }
      },
    })

  const input = getInputProps()
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()

  return (
    <HStack maxW="140px" my="0.5rem">
      <Button {...dec} isDisabled={disabled}>
        -
      </Button>
      <Input {...input} value={quantity} readOnly={true} minW="52px" />
      <Button {...inc} isDisabled={disabled}>
        +
      </Button>
    </HStack>
  )
}
