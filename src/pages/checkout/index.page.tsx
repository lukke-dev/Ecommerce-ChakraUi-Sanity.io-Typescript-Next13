import {
  Box,
  Text,
  Flex,
  Card,
  Stack,
  Image,
  Input,
  Radio,
  Button,
  Heading,
  Divider,
  CardBody,
  FormLabel,
  RadioGroup,
  CardHeader,
  Spacer,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { useCartHook } from '@src/hooks'
import { getSubstring } from '@src/utils'
import { StripeButton } from '@src/components'

export default function Checkout() {
  const { cartItems, cartItemsTotalPrice } = useCartHook()

  return (
    <>
      <NextSeo title="LD Shop - Checkout" />
      <Flex
        mx="auto"
        gap="2rem"
        w={{ base: '100%', lg: '90%' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Stack spacing={10} w={{ base: '100%', lg: '60%' }}>
          <Card borderWidth="1px" borderColor="gray.200" shadow="none">
            <CardHeader>
              <Heading size="md">Review Items</Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing="2rem">
                {cartItems.map((item) => (
                  <Flex key={item.id} align="center" justify="space-between">
                    <Flex align="center">
                      <Image
                        alt={item.name}
                        boxSize="100px"
                        bgSize="contain"
                        src={item.mainImage}
                      />
                      <Box mx="1rem">
                        <Text
                          maxW="500px"
                          fontWeight="bold"
                          fontSize={{ base: 'sm', lg: 'lg' }}
                        >
                          {item.name}
                        </Text>
                        <Text color="gray.500">
                          {getSubstring(item.description, 50)}
                        </Text>
                      </Box>
                    </Flex>
                    <Box textAlign="right">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: 'md', lg: 'lg' }}
                      >
                        ${item.price.toFixed(2)}
                      </Text>
                      <Text fontSize={{ base: 'sm', lg: 'md' }}>
                        Quantity: {item.count}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Stack>
            </CardBody>
          </Card>

          <Card borderWidth="1px" borderColor="gray.200" shadow="none">
            <CardHeader>
              <Heading size="md">Delivery Information</Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing="2rem">
                <Box>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="Enter your full name" />
                </Box>

                <Box>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" placeholder="Enter your address" />
                </Box>

                <Box mb="1.5">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        <Box w={{ base: '100%', lg: '40%' }}>
          <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
            <CardHeader>
              <Heading size="md">Payment Details</Heading>
            </CardHeader>

            <CardBody>
              <Stack spacing="2rem">
                <Flex>
                  <Input
                    zIndex={0}
                    type="text"
                    rounded="full"
                    placeholder="Enter Coupon Code"
                  />
                  <Button
                    px="2rem"
                    ml="-40px"
                    zIndex={1}
                    rounded="full"
                    colorScheme="pink"
                  >
                    Apply Coupon
                  </Button>
                </Flex>
                <Divider mt="1rem" />

                <Box>
                  <Heading size="xs" my="1rem">
                    Payment Option
                  </Heading>
                  <RadioGroup defaultValue="2">
                    <Stack>
                      <Radio value="1">Mobile Money Payment</Radio>
                      <Radio value="2">Credit Card (Master/Visa)</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Stack>
              <Divider mt="1rem" />

              <Box>
                <Flex justify="space-between" align="center" my="1rem">
                  <Text fontWeight="bold">Sub Total</Text>
                  <Text fontWeight="bold">${cartItemsTotalPrice}</Text>
                </Flex>

                <Flex justify="space-between" align="center" my="1rem">
                  <Text fontWeight="bold">Coupon Discount</Text>
                  <Text fontWeight="bold">0</Text>
                </Flex>

                <Flex justify="space-between" align="center" my="1rem">
                  <Text fontWeight="bold">Shipping Cost</Text>
                  <Text fontWeight="bold">0</Text>
                </Flex>
                <Divider />
                <Flex justify="space-between" align="center" my="1rem">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">${cartItemsTotalPrice}</Text>
                </Flex>
              </Box>

              <StripeButton totalPrice={Number(cartItemsTotalPrice)} />
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <Text color="pink.500" textAlign="center" mt="4">
        *Please use the following test credit card for payments* 4242 4242 4242
        4242 - Exp: 01/24 - CVV: 123
      </Text>
      <Spacer h={{ base: 0, '2xl': '9' }} />
    </>
  )
}
