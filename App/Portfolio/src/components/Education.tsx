import Src_aws from "../useCases/Src_aws";
import { useState, useEffect } from "react";

function Education() {
  const [education_item, set_social_links] = useState<any[]>([]);
  useEffect(() => {
    const src_aws = new Src_aws(
      "https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Src.json"
    );
    src_aws.get_src_aws().then((data) => {
      set_social_links(data.educations);
    });
  }, []);

  return (
    <section>
      <h2>Education</h2>
      {education_item.map(
        (education_info) => (
          console.log(education_info),
          (
            <div key={education_info.id} className="display_list">
              <div className="rows__title">
                <h3>{education_info.name}</h3>
                <span>
                  {education_info.startdate}-{education_info.enddate}
                </span>
              </div>

              <div className="rows__description">
                <h4>{education_info.diploma}</h4>
                <span>{education_info.description}</span>
                <span>{education_info.location}</span>
              </div>
            </div>
          )
        )
      )}
    </section>
  );
}
export default Education;
