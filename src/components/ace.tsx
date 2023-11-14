export const Editor = (props: any) => {
    if (typeof window !== "undefined") {
      const Ace = require("react-ace").default;
      require("ace-builds/src-noconflict/mode-glsl.js");
      require("ace-builds/src-noconflict/theme-twilight");
      return <Ace {...props} />;
    }
    return null;
  };