import React, {FunctionComponent} from 'react';

const RobotForm: FunctionComponent = () => {
    return (
        <form action="#" className="create-robot">
            <p className="heading">Create Robot</p>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="name" placeholder="Robot name" />
                <div className="error-name">Please enter name</div>
            </div>
            <div>
                <label htmlFor="select-type">Select type</label>
                <select name="select-type" id="select-type" className="select-type">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className="error-type">Please enter type</div>
            </div>
            <div>
                <label htmlFor="color-picker">Select Color</label>
                <input
                type="color"
                id="color-picker"
                className="color-picker"
                value="#e96126"
                />
            </div>
            <div>
                <label>Select Options</label>
                <label htmlFor="jump">
                    <input type="checkbox" id="jump" className="jump" name="jump" />
                    can jump
                </label>
                <label htmlFor="talk">
                    <input
                        type="checkbox"
                        id="talk"
                        className="talk"
                        name="talk"
                    />
                    can talk
                </label>
                <label htmlFor="blink">
                    <input type="checkbox" id="blink" className="blink" name="blink" />
                    can blink
                </label>
            </div>
            <div>
                <label htmlFor="phrase">Phrase</label>
                <textarea
                name="phrase"
                id="phrase"
                cols={20}
                rows={5}
                placeholder="Phrase"
                ></textarea>
                <div className="error-phrase">Please enter phrase</div>
            </div>
            <button>Create</button>
            <button>Show Created Robots</button>
            <button>Clear Robots</button>
            <hr />
            <div className="robot-table">
                <p className="robots-found"></p>
            </div>
        </form>
    );
}

export default RobotForm