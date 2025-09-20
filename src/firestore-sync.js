// Firebase Firestore sync for sales
import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

export async function syncSaleToFirestore(saleData) {
  try {
    await addDoc(collection(db, 'sales'), saleData);
    console.log('Sale synced to Firestore ✅');
  } catch (e) {
    console.error('Error syncing sale to Firestore:', e);
  }
}
