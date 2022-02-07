/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
  @keyframes in {
    from {
      transform: translate3d(-110%, 0, 0) skew(-25deg);
    }
    to {
      transform: translate3d(0, 0, 0) skew(0);
    }
  }
  
  @keyframes out {
    from {
      transform: translate3d(0, 0, 0);
    }
  
    to {
      transform: translate3d(110%, 0, 0) skew(25deg);
    }
  }
  .btn-animate {
    background-color: #fff;
    display: inline-block;
    font-weight: 300;
    box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    outline: none;
    padding: 10px;
    text-transform: uppercase;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    will-change: opacity;
    color: #2e3131;
    border: 1px solid #2e3131;
    overflow: hidden;
    position: relative;
    opacity: 1;
  }
  
  .btn-animate:hover {
    color: #fff;
    text-decoration: none;
  }
  
  .btn-animate::before, .btn-animate::after {
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  
  .btn-animate::before {
    content: '';
    background-color: #000;
    transform: translate3d(-130%, 0, 0) skew(-25deg);
    animation: out 1s cubic-bezier(0.4, 0, 0, 1);
  }
  
  .btn-animate:hover::before {
    transform: none;
    animation: in 0.6s cubic-bezier(0.4, 0, 0, 1);
  }
  
  .btn-animate span {
    position: relative;
    z-index: 2;
    transition: color 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
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
      <a class="btn-animate">
        <span>text</span>
      </a>
    ${style}`,
  });
};

