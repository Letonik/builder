/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
   .category-btn {
      display: block;
      position: relative;
      z-index: 1;
      top: 20px;
      left: 0;
      text-align: center;
      width: 100%;
    }
  .black-button {
      display: inline-block;
      cursor: pointer;
      padding: 7px 15px;
      border: 1px solid black;
      text-transform: uppercase;
      color: black;
  }
    .black-button:hover {
      color: #b3b3b3;
  }
  </style>
  `;
  bm.add(opts.name, {
    label: `
    <div style="width: 100%; font-size: 40px; text-align: center;">
     <i class="fa fa-circle-o"></i>
    </div>
    <div class="gjs-block-label">
      ${opts.label}
    </div> 
    `,
    category: opts.category,
    content: `
    <div class="category-btn">
       <div class="black-button">
          text
      </div>
    </div>
    ${style}`,
  });
};
