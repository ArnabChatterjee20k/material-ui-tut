import { TextField } from "@mui/material";
import { Container } from "@mui/material";

function Text_Field() {

    return (
        <Container>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic"
                    margin="dense"
                    label="Outlined"
                    variant="outlined"
                    color="secondary"
                    helperText="heper text"
                    placeholder="outlined"
                />
            </form>

            <TextField
                margin="dense"
                error
                id="standard-error"
                label="Outlined full width"
                variant="standard"
                fullWidth
            />
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
            />
            <TextField id="outlined-basic"
                required
                margin="dense"
                label="Outlined"
                variant="outlined"
                color="secondary"
                fullWidth
                multiline
                rows={40}
            />
        </Container>
    )
}

export default Text_Field