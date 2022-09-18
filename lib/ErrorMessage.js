/**
 * @fun ErrorMessage <component>
 * @param error <object
 * @returns {JSX.Element}
 */
const ErrorMessage = ({ error }) => (
  <p>An error ocurred: {error.toString()}</p>
)

export default ErrorMessage
