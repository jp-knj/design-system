import { style } from "@vanilla-extract/css";

export const button = style({
    padding: "14px",
    background: "#61dafb",
    appearance: "none",
    border: "none",
    borderRadius: "4px",
    fontWeight: "700",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: "1",
});

export const buttonPrimary = style({
    color: "white",
    background: "#1ea7fd",
})

export const buttonSecondary = style({
    color: "#333",
    background: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
})