export default function Tab({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
