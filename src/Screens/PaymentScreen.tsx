import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import { useMutation } from '@apollo/client';
import { CREATE_PAYMENT_SESSION } from '../GraphQL/Mutation';
import { ActivityIndicator, Alert, Button, Text, View } from 'react-native';

export default function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    initializePaymentSheet();
  }, []);
  
  const [createPayment, { error: createPaymentSessionError, loading: createPaymentSessionLoading }] = useMutation(CREATE_PAYMENT_SESSION, {
    onCompleted: (data) => {
      console.log("stripe", data.createPaymentSession);
    }
  })
  if (createPaymentSessionLoading) return <ActivityIndicator />
  if (createPaymentSessionError) return <Text>{createPaymentSessionError.message}</Text>

  const initializePaymentSheet = async () => {
    const result = await createPayment({
      variables: {
        amount: "1000"
      },
    });
    const { customer, ephemeralKey, paymentIntent } = result.data.createPaymentSession;

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };



  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </View>
  );
}