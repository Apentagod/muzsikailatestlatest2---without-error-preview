// lib/firebase.ts vagy hasonló fájlban
const mockUser = {
  uid: "mock-user-id",
  email: "test@example.com",
  displayName: "Test User",
  emailVerified: true,
  _stopProactiveRefresh: () => {}, // Ez hiányzott!
  getIdToken: () => Promise.resolve("mock-token"),
  // Egyéb szükséges user mezők...
};

const auth = {
  currentUser: mockUser,
  onAuthStateChanged: (callback) => {
    callback(mockUser);
    return () => {}; // unsubscribe function
  },
  signInWithEmailAndPassword: () => Promise.resolve({ user: mockUser }),
  signOut: () => Promise.resolve(),
  // Egyéb auth metódusok...
};

// A többi firebase szolgáltatás mockja...

export { auth };
