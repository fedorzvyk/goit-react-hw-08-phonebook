import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import { Form } from './RegistrationForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { Notify } from 'notiflix';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(data => {
        if (data.error) {
          throw new Error('Email or Password is incorrect');
        }
      })
      .catch(e => {
        Notify.failure('Email or Password is incorrect');
      });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
