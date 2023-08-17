import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
    },

    settingOption: {
        marginLeft: "auto",
    },

    margin: {
        margin: theme.spacing(1),
    },

    color: {
        color: theme.palette.secondary.main,
    },

    text: {
        marginLeft: "42px",
        color: theme.palette.text.secondary,
    },

    textP: {
        marginLeft: "42px",
        color: theme.palette.text.secondary,
    },

}));

const Api = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <h2>Documentação para envio de mensagens</h2>

                <h2 className={classes.color}>Métodos de Envio</h2>

                <p className={classes.text}>1. Mensajes de Texto</p>
                <p className={classes.text}>2. Mensajes de Multimedia</p>

                <h2 className={classes.color}>Intrucciones</h2>
                <p><b>Observaciones Importantes</b></p>
                <ul>
                    <li className={classes.text}>Para pegar el token da la API, vaya a configuraciones donde su token estará, sin el no será posible enviar mensajes.</li>
                    <li className={classes.text}>El número para envio no debe tener simbolos o caracteres especiales y debe ser compuesto por:</li>
                    <br />
                    <ol>
                        <ul>
                            <li className={classes.text}>Código do pais - Ex: 591 (Bolivia)</li>
                            <li className={classes.text}>COD</li>
                            <li className={classes.text}>Número</li>
                        </ul>
                    </ol>
                </ul>
                <h2 className={classes.color}>1. Mensajes de Texto</h2>
                <p>Parametros necesarios para el envio de mensajes de texto:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type application/json</p>
                <p className={classes.textP}><b>Body: </b>"number": "59199999999", "body": "Enviado via api"</p>

                <h2 className={classes.color}>2. Mensajes Multimedia</h2>
                <p>Parametros necesarios para el envio de mensajes de multimedia:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type multipart/form-data</p>
                <p className={classes.textP}><b>Body: </b>"number": "59199999999", "medias": "aqui va su multimedia", "body": "Enviado via api"</p>
            </Container>
        </div>
    );
};

export default Api;