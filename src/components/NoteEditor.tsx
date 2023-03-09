import React, {useState} from 'react';


export const NoteEditor = ({onSave}: { onSave: (note: { title: string; content: string }) => void }) => {

    const [code, setCode] = useState<string>('');
    const [title, setTitle] = useState<string>("");

    return (
        <div className={"card mt-5 border border-gray-200 bg-base-100 shadow-xl"}>
            <div className={"card-body"}>
                <h2 className={"card-title"}>
                    <input
                        type={"text"}
                        placeholder={"Note Title"}
                        className={"input input-primary input-lg w-full font-bold"}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.currentTarget.value)
                        }}
                    />

                </h2>
                <input
                    value={code}
                    type={"text"}
                    width={"500px"}
                    height={"30vh"}
                    onChange={(e) => {
                        setCode(e.currentTarget.value)
                    }}
                    className={"border border-gray-300"}

                />
            </div>
            <div className={"card-actions justify-end"}>
                <button onClick={() => {
                    onSave({
                        title,
                        content: code
                    });
                    setCode("");
                    setTitle('');
                }}
                        className={"btn btn-primary"}
                        disabled={title.trim().length === 0 || code.trim().length === 0}
                >Save
                </button>

            </div>
        </div>
    );
}



