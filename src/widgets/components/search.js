import React from 'react';
import './search.css';
import { Prompt } from 'react-router';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <Prompt
    // when={true} DA LO MISMO EN EL CASO DE TRUE SI LO COLOLO Ó NO
    // when={false}
    when={props.prompt}
    message='Estas seguro de querer abandonar la pagina'
    />
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search