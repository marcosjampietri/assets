import styled from "styled-components";
import { modOffAction } from "../store/toggleSlicer";
import { useDispatch } from "react-redux";

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <>
            <ModalSt onClick={() => dispatch(modOffAction())}>
                <div>MODAL</div>
            </ModalSt>
        </>
    );
};

export default Modal;

const ModalSt = styled.div`
    position: fixed;
    width: 80%;
    height: 80%;
    margin: 10%;
    z-index: 2;

    background: red;

    display: flex;
    justify-content: center;
    align-items: center;
`;
