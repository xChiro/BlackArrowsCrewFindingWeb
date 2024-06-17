interface HandleNameLinkProps {
        handleName: string
}

const HandleNameLink = ({ handleName }: HandleNameLinkProps) => {
    return (
        <a href={`https://robertsspaceindustries.com/citizens/${handleName}`}
           target="_blank"
           rel="noreferrer noopener"
           style={{color: 'white', textDecoration: 'underline'}}>
            {handleName}
        </a>
    );
}

export default HandleNameLink;