import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, products) =>
      summedPrice + products.item.price * products.quantity,
    0,
  );
  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items):
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            {totalPrice.toFixed(2)}$
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={() => console.warn('go to checkout')}
          containerStyles={{
            backgroundColor: '#f7e300',
            borderColor: '#c7b702',
          }}
        />
      </View>

      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 5,
  },
});

export default ShoppingCartScreen;
