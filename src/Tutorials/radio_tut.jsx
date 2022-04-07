import React from 'react'
import { Radio } from '@mui/material'
import { RadioGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
function radio_tut() {
    return (
        <div>
            <Radio value="default" label="hellow" defaultValue={1} />
            <Radio value="goodbye" label="hellow" defaultValue={2} />

            {/* To select only one option */}
            <RadioGroup>
                <Radio value="default" />
                <Radio value="goodbye" />
            </RadioGroup>

            {/* Creating lables using formcontrol label and value prop allow us to select radio buttons*/}
            <RadioGroup>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
            </RadioGroup>

            setting default value and cant be changed and for updating we have use onChange here in the radio grp to change
            <RadioGroup value="4">
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="2" />
                <FormControlLabel value="4" control={<Radio />} label="2" />
            </RadioGroup>


            <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
            >
                <FormControlLabel
                    value="top"
                    control={<Radio color="secondary" />}
                    label="Top"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={<Radio color="secondary" />}
                    label="Top"
                    labelPlacement="top"
                />
            </RadioGroup>
        </div>
    )
}

export default radio_tut