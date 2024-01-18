// import { 
//   Form, 
//   // useLoaderData, 
//   useLocation, 
//   useSearchParams 
// } from "react-router-dom";

// export default function NoteForm() {
//   const [searchParams] = useSearchParams();
//   const {key} = useLocation(); 
//   /*
//    * En el caso que quisieramos usar alguna libreria como Formik para trabajar con formularios
//    * podemos usar el hook "useSubmit" de RRD.
//    * dentro del "onSubmit" de Formik, usamos el hook ya que este devuelve la data ya validada
//    * @example 
//    * let submit = useSubmit();
//    * submit(data, {method: "post, action: "/notes/new"});
//    */
//   // const note = useLoaderData() // para traer los datos de la nota al editarla
// //la "key" es el identificador unico de la locacion actual
//   return (
//   <Form method="post" action={`?${searchParams}`}>
// {/* Usamos los "serachParams" acá también para decirle al "action"  del formulario 
// que conserve los parametros en la URL aun cuando creo una nota nueva, teniendo en cuenta que una vez 
// la creamos, automatcamente nos vamos a la URL de la nueva nota creada, ademas desde el "Action",
// "notesFormAction" tambien darle acceso a la instancia de los "searchParams" */}
//       <h2>Note form</h2>


//       <label>
//       Correo Electrónico

//       <input type="text" name="title" required  key={key} />
//       </label>

//       <label>
//       Contraseña
//       <textarea name="body" required key={key} />
//       </label>

//       <button>Submit</button>

//   </Form>

//   );
// }

import logo from '../../assets/fotos/logo.png';
import invlogo from '../../assets/fotos/invlogo.png';
import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";
import { 
  Link, 
  useLocation,
  useSearchParams,
  useSubmit, 
} from 'react-router-dom';





export default function Register() {
  const SwitchImg = useColorModeValue(logo, invlogo)
  const textColor = useColorModeValue('gray.600', 'white')
  const bgBoxColor = useColorModeValue( 'blue.200', 'blue.700')
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')

  const {key} = useLocation();

  const [searchParams] = useSearchParams();

  const submit = useSubmit();

  
  return (
    <VStack 
    bg={useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )!important', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )!important')}
    align="center" 
    justify="center" 
    h="100vh" 
    >
      <Link to={'/'}>  
        <Img src={SwitchImg} alt="Logo" maxH='135%' maxW='135%' ml={{base: -500}} mt={{base: -30}} />
      </Link>
      <Box bg={bgBoxColor} p={16} rounded="md" w={96}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              submit(values, {method: "post", action: `?${searchParams}`})

            }, 400);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel color={textColor} >Nombre de Usuario</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                    placeholder='¿dinos tu nombre?'
                    colorScheme={textColor}
                    key={key}
                    validate={(value:string) => {
                      let error;

                      if (!value) {
                        error = 'Necesario';
                      } else if (value.length < 3) {
                          error = "El nombre de usuario debe contener al menos 3 caracteres";
                        }
                      return error;
                    }}
                />
                  <Box color={'red.600'} >
                    <FormErrorMessage> {errors.username} </FormErrorMessage>
                  </Box>
                </FormControl>

                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel color={textColor} >Correo Electrónico</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder='ejemplo@ejemplo.co'
                    colorScheme={textColor}
                    key={key}
                    validate={(value:string) => {
                      let error;

                      if (!value) {
                        error = 'Necesario';
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                        error = 'Correo inválido';
                      }
                      return error;
                    }}
                />
                  <Box color={'red.600'} >
                    <FormErrorMessage> {errors.email} </FormErrorMessage>
                  </Box>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel color={textColor} htmlFor="password">Contraseña</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    placeholder="mínimo 6 caracteres"
                    key={key}
                    validate={(value: string) => {
                      let error;

                      if (value.length < 6) {
                        error = "La contraseña debe contener al menos 6 caracteres";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  color={textColor}
                  border={colorMode1}
                  key={key}
                >
                  Acepto Términos y Condiciones
                </Field>
                <Button 
                type="submit" 
                bg={'pink.400'}
                _hover={{
                  bg: 'pink.300',
                }}
                width="full"
                >
                  Registrarse
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}