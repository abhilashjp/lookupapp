// CustomLayout.js

import React from 'react';

const CustomLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Your Site Title</title>
        {/* Other meta tags, stylesheets, etc. */}
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
          {`
            hbspt.forms.create({
              region: "na1",
              portalId: "22529954",
              formId: "a16f7dad-52b2-4450-8d85-fac6da7562e0"
            });
          `}
        </script>
      </head>
      <body>
        {/* Render the Markdown content */}
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  );
};

export default CustomLayout;
