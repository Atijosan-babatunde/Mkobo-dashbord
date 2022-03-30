import React from 'react';
import * as Nav from './Navigations';

export const BaseContainer = ({ children, loading, error, open }) => {
    return loading ? (
         <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
     ) : error ? (
             <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
      ) : (
            <React.Fragment>
                <Nav.Header open={open} />
                {children}

            </React.Fragment>
    );
}