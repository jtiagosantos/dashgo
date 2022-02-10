import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../components/Form/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({ resolver: yupResolver(sigInFormSchema) });

  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = (formData) => {
    console.log(formData);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
