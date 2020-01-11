import {Heading, Field, Button} from '@theme-ui/components';

const Form = () => {
    return (
        <>
            <Heading mb={3}>{'Subscribe'}</Heading>
            <form>
                <Field defaultValue="" label="First Name" mb={2} name="name" />
                <Field defaultValue="" label="Email" mb={3} name="email" />
                <Button>{'Submit'}</Button>
            </form>
        </>
    );
};

export default Form;
