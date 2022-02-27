import React from 'react';
import './header.styles.scss';

const Header = ({title}) => (
    <h1 className="title">{title.toUpperCase()}</h1>
)

export default Header;