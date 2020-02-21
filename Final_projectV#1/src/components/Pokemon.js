import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PokemonConsumer } from "../context";
import PropTypes from "prop-types";

export default class Pokemon extends Component {
  render() {
    let { id, name, caught } = this.props.pokemon;
    return (
      <PokemonWrapper className="col-9 mx-auto col-lg-3 my-3">
        <div className="card">
          <PokemonConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={`/pokemons/${id}.png`} className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={caught ? true : false}
                  onClick={() => {
                    value.addToCollection(id);
                    value.openModal(id);
                  }}
                >
                  {caught ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      Caught
                    </p>
                  ) : (
                    <p className="pokeball">Add</p>
                  )}
                </button>
              </div>
            )}
          </PokemonConsumer>

          {/* card footer */}
          <div className="card footer d-flex justify-content-between">
            <h2 className="align-self-center m-2 card-footer ">
              #{id} {name}
            </h2>
            {caught}
          </div>
        </div>
      </PokemonWrapper>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    caught: PropTypes.bool
  }).isRequired
};

const PokemonWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.4);
    }

    .card-footer {
      background: rgb(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .pokeball {
    margin: 0;
  }
`;
