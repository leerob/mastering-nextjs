export default () => (
    <div className="title">
        <p>styled-jsx</p>
        <style jsx>{`
            .title {
                font: 15px Helvetica, Arial, sans-serif;
                background: #eee;
                padding: 100px;
                text-align: center;
                transition: 100ms ease-in background;
            }

            .title:hover {
                background: #ccc;
            }
        `}</style>
    </div>
);
