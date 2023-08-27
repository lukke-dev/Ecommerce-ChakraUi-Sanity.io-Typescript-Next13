import { StripeButtonProps } from './types'
import StripeCheckout from 'react-stripe-checkout'

export const StripeButton: React.FC<StripeButtonProps> = ({ totalPrice }) => {
  const publishableKey =
    'pk_test_51KHhcRIkwGvfmDOcjdbHqUXK0PiH4tTOBGoeEfRAtGd2sEBYMpquBsZXZpiE2tZzYvHgGsDJNnhBowZoiEHcrLls00kNaBjHti'

  const onReceiveToken = () => {
    alert('payment successful')
  }

  return (
    <>
      <StripeCheckout
        name="LD Shop"
        label="Pay Now"
        billingAddress
        shippingAddress
        panelLabel="Pay Now"
        token={onReceiveToken}
        amount={totalPrice * 100}
        stripeKey={publishableKey}
        description={`Your total is $${totalPrice}`}
      />
    </>
  )
}
