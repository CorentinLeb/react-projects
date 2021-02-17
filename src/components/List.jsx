const List = ({student}) => {
    return (
    <>
    {student.map((eleve)=>{
        const {id , name , attendance} = eleve;
    
        return (
            <article className="student" key={id}>
                <div className="student-list">
                    <h4>{name}</h4>
                    <p>{student.attendance ? 'Présent' : 'Absent'}</p>  
                </div>
            </article>
        )
    })}
    </>
    )
}

export default List