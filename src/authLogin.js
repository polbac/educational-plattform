import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { userLogin as userLoginAction, Notification, translate, defaultTheme } from 'admin-on-rest';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import { cyan500, pinkA200, green400 } from 'material-ui/styles/colors';

// import translate from 'admin-on-rest/src/i18n/translate';
// import Notification from 'admin-on-rest/src/mui/layout/Notification';


const logo = './images/eduly.png';
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
};

function getColorsFromTheme(theme) {
    if (!theme) return { primary1Color: cyan500, accent1Color: green400 };
    const {
        palette: {
            primary1Color,
            accent1Color,
        },
      } = theme;
    return { primary1Color, accent1Color };
}

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) =>
    (<TextField
        errorText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />);

class Login extends Component {
    login = auth => this.props.userLogin(auth, this.props.location.state ? this.props.location.state.nextPathname : '/');

    render() {
        const { handleSubmit, submitting, theme, translate } = this.props;
        const muiTheme = getMuiTheme(theme);
        const { primary1Color, accent1Color } = getColorsFromTheme(muiTheme);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: 'white' }}>
                    <Card style={styles.card}>
                        <div style={styles.avatar}>
                            <Avatar backgroundColor='white' src={logo} size={60} style={{ borderRadius: 0 }} />
                        </div>
                        <form onSubmit={handleSubmit(this.login)}>
                            <div style={styles.form}>
                                <div style={styles.input} >
                                    <Field
                                        name="email"
                                        component={renderInput}
                                        floatingLabelText={'Email'}
                                        disabled={submitting}
                                    />
                                </div>
                                <div style={styles.input}>
                                    <Field
                                        name="password"
                                        component={renderInput}
                                        floatingLabelText={translate('aor.auth.password')}
                                        type="password"
                                        disabled={submitting}
                                    />
                                </div>
                            </div>
                            <CardActions>
                                <RaisedButton
                                    type="submit"
                                    primary
                                    disabled={submitting}
                                    icon={submitting && <CircularProgress size={25} thickness={2} />}
                                    label={translate('aor.auth.sign_in')}
                                    fullWidth
                                />
                            </CardActions>
                        </form>
                    </Card>
                    <Notification />
                </div>
            </MuiThemeProvider>
        );
    }
}

Login.propTypes = {
    ...propTypes,
    authClient: PropTypes.func,
    previousRoute: PropTypes.string,
    theme: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
};

Login.defaultProps = {
    theme: defaultTheme,
};

const enhance = compose(
    translate,
    reduxForm({
        form: 'signIn',
        validate: (values, props) => {
            const errors = {};
            const { translate } = props;
            if (!values.email) errors.email = translate('aor.validation.required');
            if (!values.password) errors.password = translate('aor.validation.required');
            return errors;
        },
    }),
    connect(null, { userLogin: userLoginAction }),
);

export default enhance(Login);
