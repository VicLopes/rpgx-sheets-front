import React from "react";
import PropTypes from "prop-types";
import "../styles/characterSheet.scss";

export const CharacterSheetPathfinder = ({ sheetData }) => {
  return (
    <div className="sheet-wrapper">
      {console.log(Object.keys(sheetData))}
      <section id="abilities">
        <p>
          Strength:
          <span className="ability-score">{sheetData.ability_scores.str}</span>
        </p>
        <p>
          Dexterity:
          <span className="ability-score">{sheetData.ability_scores.dex}</span>
        </p>
        <p>
          Constitution:
          <span className="ability-score">{sheetData.ability_scores.con}</span>
        </p>
        <p>
          Intelligence:
          <span className="ability-score">{sheetData.ability_scores.int}</span>
        </p>
        <p>
          Wisdom:
          <span className="ability-score">{sheetData.ability_scores.wis}</span>
        </p>
        <p>
          Charisma:
          <span className="ability-score">{sheetData.ability_scores.cha}</span>
        </p>
      </section>
      <section id="skills" className="capitalize">
        <p>
          Acrobatics:
          <span className="skill-score">{sheetData.skills.acrobatics}</span>
        </p>
        <p>
          Arcana: <span className="skill-score">{sheetData.skills.arcana}</span>
        </p>
        <p>
          Athletics:
          <span className="skill-score">{sheetData.skills.athletics}</span>
        </p>
        <p>
          Crafting:
          <span className="skill-score">{sheetData.skills.crafting}</span>
        </p>
        <p>
          Deception:
          <span className="skill-score">{sheetData.skills.deception}</span>
        </p>
        <p>
          Diplomacy:
          <span className="skill-score">{sheetData.skills.diplomacy}</span>
        </p>
        <p>
          Intimidation:
          <span className="skill-score">{sheetData.skills.intimidation}</span>
        </p>
        <p>
          {sheetData.skills.lore1[0]} Lore:
          <span className="skill-score">{sheetData.skills.lore1[1]}</span>
        </p>
        <p>
          {sheetData.skills.lore2[0]} Lore:
          <span className="skill-score">{sheetData.skills.lore2[1]}</span>
        </p>
        <p>
          Medicine:
          <span className="skill-score">{sheetData.skills.medicine}</span>
        </p>
        <p>
          Nature: <span className="skill-score">{sheetData.skills.nature}</span>
        </p>
        <p>
          Occultism:
          <span className="skill-score">{sheetData.skills.occultism}</span>
        </p>
        <p>
          Performance:
          <span className="skill-score">{sheetData.skills.performance}</span>
        </p>
        <p>
          Religion:
          <span className="skill-score">{sheetData.skills.religion}</span>
        </p>
        <p>
          Society:
          <span className="skill-score">{sheetData.skills.society}</span>
        </p>
        <p>
          Stealth:
          <span className="skill-score">{sheetData.skills.stealth}</span>
        </p>
        <p>
          Survival:
          <span className="skill-score">{sheetData.skills.survival}</span>
        </p>
        <p>
          Thievery:
          <span className="skill-score">{sheetData.skills.thievery}</span>
        </p>
      </section>
      <section id="extras" className="capitalize">
        <p>
          Size: <span>{sheetData.extras.size}</span>
        </p>
        <p>
          Alignment: <span>{sheetData.extras.alignment}</span>
        </p>
        <p>
          Traits: <span>{sheetData.extras.traits}</span>
        </p>
        <p>
          Deity: <span>{sheetData.extras.deity}</span>
        </p>
      </section>
    </div>
  );
};

CharacterSheetPathfinder.propTypes = {
  sheetData: PropTypes.object,
};
