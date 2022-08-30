export function Post(props) {
    return (
        <>
            <div>
                <strong>{props.author}</strong>
            </div>
            <div>{props.content}</div>
        </>
    );
}
