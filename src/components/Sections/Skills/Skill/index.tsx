import React from "react";
import SkillContainer from "./styles";

interface ISkillProps {
    description: string;
    children: JSX.Element;
}

const Skill = ({ description, children }: ISkillProps) => (
    <SkillContainer>
        {children}
        <p>{description}</p>
    </SkillContainer>
);

export default Skill;
