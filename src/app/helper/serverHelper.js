const serverHelper = () => {
  if (process.env.NODE_ENV !== "production") return "http://localhost:3005";
  return "https://vinher.ch";
};

export default serverHelper;
