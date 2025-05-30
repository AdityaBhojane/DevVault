/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"


function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

async function displayRazorpay(amount: number) {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  if (!res) {
    alert('Razropay failed to load!!')
    return
  }

  const data = await fetch('http://localhost:3001/api/v1/razorpay', {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount })
  }).then((t) =>
    t.json()
  );

  const options: any = {
    key: import.meta.env.VITE_RZP_KEY,
    amount: data.amount,
    currency: data.currency,
    name: 'Your App Name',
    description: 'Test Transaction',
    order_id: data.orderId,
    handler: async function (response: any) {
      try {
        const verifyRes = await axios.post('http://localhost:3001/api/v1/razorpay/verify', {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          status: "Completed",
          amount: data.amount,
          userId: 2,
          courseId: 5
        });
        console.log('Payment Successful', verifyRes);
      } catch (error) {
        console.log('Payment verification failed', error);
      }
    },
    prefill: {
      name: 'John Doe',
      email: 'john@example.com',
      contact: '9999999999',
    },
    theme: {
      color: '#3399cc',
    },
  };


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const paymentObject = new window.Razorpay(options);

  paymentObject.on('payment.failed', async function (response: any) {
    console.log('Payment failed:', response);
    await axios.post('http://localhost:3001/api/v1/razorpay/verify', {
      razorpay_order_id: response.error.metadata.order_id,
      razorpay_payment_id: null,
      razorpay_signature: null,
      amount: data.amount,
      status: 'Rejected',
      userId: 2,
      courseId: 5
    });
  });


  paymentObject.open();
};



export default displayRazorpay;