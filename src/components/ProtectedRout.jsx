function ProtectedRout({ children }) {
  const user = true;

  if (user) return children;
}

export default ProtectedRout;
