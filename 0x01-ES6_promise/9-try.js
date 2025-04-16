/* This function executes a math function and handles success/error cases */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    /* Always add this message to the queue regardless of success or failure */
    queue.push('Guardrail was processed');
  }
  return queue;
}
