import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundSize: "200% auto",
  minWidth: "100px",
  background: "#0B3C9D",
  backgroundImage: "linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)",
  boxShadow: "0 0 20px #eee",
  borderRadius: "100vh",
  transition: "0.5s",
  textAlign: "center",
  textDecoration: "none",
  padding: '16px',
  ':hover': {
    backgroundPosition: "right center"
  },
});

export const buttonText = style({
  color: "#FCFCFC",
  fontSize: "16px",
});