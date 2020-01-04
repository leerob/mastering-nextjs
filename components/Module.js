import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

    img {
        width: 30px;
        margin-right: 8px;
    }
`;

const LessonList = styled.ul`
    padding: 0;
    margin: 8px 0 0 10px;
`;

const Lesson = styled.li`
    display: flex;
    align-items: flex-start;
    font-size: 14px;

    img {
        width: 20px;
        margin-right: 8px;
    }

    h6 {
        margin-bottom: 8px;
    }
`;

const Module = ({title, lessons}) => (
    <div>
        <Title>
            <img alt="module" src="/images/film.svg" />
            {title}
        </Title>
        <LessonList>
            {lessons.map((lesson) => {
                return (
                    <Lesson key={lesson}>
                        <img alt="arrow" src="/images/arrow.svg" />
                        <h6>{lesson}</h6>
                    </Lesson>
                );
            })}
        </LessonList>
    </div>
);

export default Module;
