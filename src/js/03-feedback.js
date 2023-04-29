import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const onFormInput = throttle(() => {
    const feedbackFormState = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  }, 500);
  emailInput.addEventListener('input', onFormInput);
messageInput.addEventListener('input', onFormInput);
const savedFeedbackFormState = localStorage.getItem('feedback-form-state');

if (savedFeedbackFormState) {
  const { email, message } = JSON.parse(savedFeedbackFormState);
  emailInput.value = email;
  messageInput.value = message;
}
form.addEventListener('submit', event => {
    event.preventDefault();
  
    const feedbackFormState = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    console.log(feedbackFormState);
  
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
  
