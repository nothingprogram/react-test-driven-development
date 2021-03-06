// receive the success state as a prop

const Congrats = ({ success }) => {
  return (
    <>
      {success && (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      )}
      {!success && <div data-test="component-congrats" />}
    </>
  );
};

export default Congrats;
