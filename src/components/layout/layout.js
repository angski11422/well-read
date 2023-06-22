import { Fragment } from "react";

import MainNav from './main-nav';

export default function Layout(props) {
    return (
        <Fragment>
            <MainNav />
            <main>{props.children}</main>
        </Fragment>
    )
}