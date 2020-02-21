import React, { Component } from "react";
import styled from "styled-components";
import { PokemonConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <PokemonConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { name, id, count, caughtData } = value.modalWindow;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5"
                    >
                      <h4>Pokemon was caught and added to collection</h4>
                      <img
                        src={`/pokemons/${id}.png`}
                        className="img-fluid"
                        alt="pokemon"
                      ></img>
                      <h5>{name}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue
                        </ButtonContainer>
                      </Link>
                      <Link to="/collection">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Open collection
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </PokemonConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
