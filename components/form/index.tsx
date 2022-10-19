import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";
import { MdAccountCircle, MdEmail, MdMessage } from "react-icons/md";

type Inputs = {
    name: string;
    email: string;
    message: string;
};

const Form = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required, Mr. X 🤪"),
        email: Yup.string()
            .required("Email is required 😅")
            .email("Email is invalid 🧐"),
        message: Yup.string()
            .min(15, "Message must be at least 15 characters long 😒")
            .required("Message is required 😅"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>(formOptions);

    const onSubmit = (data: Inputs) => console.log(data);

    return (
        <FormSt onSubmit={handleSubmit(onSubmit)}>
            <p>Sketch de formulário de mensagem</p>
            <Field>
                <Label htmlFor="name">
                    <h3>NOME</h3>
                    <MdAccountCircle />
                    <Input
                        {...register("name", { required: true })}
                        id="name"
                        type="name"
                        className={`form-control ${
                            errors.name ? "is-invalid" : ""
                        }`}
                    />
                </Label>

                {errors.name ? (
                    <>
                        <Warn>{errors.email?.message}</Warn>
                    </>
                ) : null}
            </Field>

            <Field>
                <Label htmlFor="email">
                    <h3>E-MAIL</h3>
                    <MdEmail />
                    <Input
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        placeholder="email@gmail.com"
                        defaultValue="@gmail.com"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                    />
                </Label>

                {errors.email ? (
                    <>
                        <Warn>{errors.email?.message}</Warn>
                    </>
                ) : null}
            </Field>

            <Message>
                <Label htmlFor="message">
                    <h3>MENSSAGEM</h3>
                    <MdMessage />
                    <textarea
                        {...register("message", { required: true })}
                        id="message"
                        className={`form-control ${
                            errors.message ? "is-invalid" : ""
                        }`}
                    />
                </Label>

                {errors.message ? (
                    <>
                        <Warn>{errors.message?.message}</Warn>
                    </>
                ) : null}
            </Message>

            <div>
                <Submit>Enviar Mensagem</Submit>
            </div>
        </FormSt>
    );
};

export default Form;

const FormSt = styled.form`
    width: 100%;
    max-width: 500px;
    min-width: 200px;
    margin: 0px auto;
    padding: 10px;

    box-shadow: 0px 10px 30px hsla(0, 0%, 50%, 0.3);
`;

const Field = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 20px auto;

    border-radius: 10px;
    box-shadow: 0px 0px 10px hsla(0, 0%, 50%, 0.3);
`;

const Label = styled.label`
    color: hsla(0, 0%, 100%, 0.91);
    font-weight: 600;
    font-size: 8px;

    svg,
    h3 {
        position: absolute;
        left: 10px;
    }
    svg {
        top: 24px;
        font-size: 20px;
        fill: hsla(280, 100%, 25%, 1);
    }
    h3 {
        top: 0px;
        padding: 0px 3px;
        color: hsla(280, 100%, 25%, 1);
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 18px 0px 0px 34px;
    // padding-top: 22px;
    font-size: 16px;

    border: 1px solid hsla(0, 100%, 25%, 0);
    border-radius: 10px;
    background-color: hsla(0, 0%, 80%, 0.2);
    color: hsla(0, 0%, 20%, 1);
    transition: 0.5s;

    ::placeholder {
        transition: 0.3s;
        color: hsla(240, 0%, 100%, 0.31);
        font-size: 16px;
        font-weight: 100;
    }

    :focus {
        transition: 0.3s;
        // padding: 0px 60px;
        // padding-top: 4px;
        // padding-left: 35px;

        outline: none;
        // background: hsla(55, 100%, 60%, 1);
        // mix-blend-mode: hard-light;
        color: hsla(280, 100%, 0%, 1);
        ::placeholder {
            color: hsla(240, 0%, 80%, 0.81);
        }
    }
`;

const Message = styled(Field)`
    width: 100%;
    height: 100%;
    min-height: 200px;

    textarea {
        width: 100%;
        height: 100%;
        padding: 24px 34px;
        // padding-top: 22px;
        font-size: 16px;

        border: 1px solid hsla(0, 100%, 25%, 0);
        border-radius: 10px;
        background-color: hsla(0, 0%, 100%, 0.2);
        color: hsla(0, 0%, 20%, 1);
        transition: 0.5s;

        ::placeholder {
            transition: 0.3s;
            color: hsla(240, 0%, 80%, 0.21);
            font-size: 16px;
            font-weight: 100;
        }

        :focus {
            transition: 0.3s;
            // padding: 0px 60px;
            // padding-top: 4px;
            // padding-left: 35px;

            outline: none;
            // background: hsla(55, 100%, 60%, 1);
            // mix-blend-mode: hard-light;
            color: hsla(280, 100%, 0%, 1);
            ::placeholder {
                color: hsla(240, 0%, 50%, 0.81);
            }
        }
    }
`;

const Submit = styled.button`
    width: 100%;
    height: 50px;
    margin: 30px 0px;

    border-radius: 10px;
    background-color: hsla(280, 100%, 25%, 1);
    border: none;
    color: white; ;
`;

const Warn = styled.span`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 110%);
    width: 100%;
    padding: 0px;
    z-index: 2;
    font-size: 14px;
    text-align: center;

    // border: 1px solid hsla(360, 100%, 100%, 1);
    background: hsla(0, 80%, 50%, 1);
    border-radius: 5px;
    color: hsla(360, 100%, 100%, 1);
`;

const shake = keyframes` 
    0% { transform: translate(25px, 0px) ; }
  10% { transform: translate(-12px, -0px) ; }
  20% { transform: translate(8px, 0px) ; }
  30% { transform: translate(-5px, 0px) ; }
  40% { transform: translate(3px, -0px) ; }
  50% { transform: translate(-2px, 0px) ; }
  60% { transform: translate(1px, 0px) ; }
  70% { transform: translate(0px, 0px) ; }
  80% { transform: translate(0px, -0px) ; }
  90% { transform: translate(0px, 0px) ; }
  100% { transform: translate(0px, -0px) ; } 
`;

const Err = styled.div`
    position: absolute;
    bottom: -40px;

    h6 {
        border-radius: 3px;
        padding: 4px 50px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: initial;
        font-size: 10px;
        background: red;
        color: white;
    }

    animation: ${shake} 0.82s cubic-bezier(0, 1, 0.7, 1);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
`;
