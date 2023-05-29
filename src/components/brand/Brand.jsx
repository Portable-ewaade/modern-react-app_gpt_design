import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='partners' />
    </div>
    <div>
      <img src={slack} alt='partners' />
    </div>
    <div>
      <img src={atlassian} alt='partners' />
    </div>
    <div>
      <img src={dropbox} alt='partners' />
    </div>
    <div>
      <img src={shopify} alt='partners' />
    </div>
  </div>
);

export default Brand;