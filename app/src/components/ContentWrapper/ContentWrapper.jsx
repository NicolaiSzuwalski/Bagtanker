import PropTypes from 'prop-types';
import React from 'react';

export const ContentWrapper = (props) => {
    document.title = props.title;
    
    if (props.description) {
        document
            .querySelector('meta[name="description"]')
            .setAttribute("content", props.description);
    }

    return (
        <section>
            <h1>{props.title}</h1>
            <article>{props.children}</article>
        </section>
    );
};

ContentWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};
