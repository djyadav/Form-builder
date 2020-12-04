const templates = [
  {
    templateId: 1,
    createdBy: "Deepak",
    fields: [
      {
        type: "TEXTBOX",
        _key: "name",
        contentType: "text",
        label: "Name",
        placeholder: "Name",
        mandatory: true,
      },
      {
        type: "TEXTBOX",
        _key: "age",
        contentType: "number",
        label: "Age",
        placeholder: "Age",
        mandatory: true,
        min: 1,
      },
      {
        type: "CHECKBOX_GROUP",
        _key: "workTimings",
        label: "What work timings they prefer?",
        options: [
          { value: "PERMANENT", label: "Permanent" },
          { value: "PART_TIME", label: "Part Time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
      {
        type: "RADIO_GROUP",
        _key: "jobLevel",
        label: "What job level are they seeking?",
        options: [
          { value: "FULL_TIME", label: "Full time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
    ],
  },
  {
    templateId: 2,
    createdBy: "Deepak",
    fields: [
      {
        type: "TEXTBOX",
        _key: "age",
        contentType: "number",
        label: "Age",
        placeholder: "Age",
        mandatory: true,
        min: 1,
      },
      {
        type: "CHECKBOX_GROUP",
        _key: "workTimings",
        label: "What work timings they prefer?",
        options: [
          { value: "PERMANENT", label: "Permanent" },
          { value: "PART_TIME", label: "Part Time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
      {
        type: "RADIO_GROUP",
        _key: "jobLevel",
        label: "What job level are they seeking?",
        options: [
          { value: "FULL_TIME", label: "Full time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
    ],
  },

  {
    templateId: 3,
    createdBy: "Deepak",
    fields: [
      {
        type: "TEXTBOX",
        _key: "name",
        contentType: "text",
        label: "Name",
        placeholder: "Name",
        mandatory: true,
      },

      {
        type: "CHECKBOX_GROUP",
        _key: "workTimings",
        label: "What work timings they prefer?",
        options: [
          { value: "PERMANENT", label: "Permanent" },
          { value: "PART_TIME", label: "Part Time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
    ],
  },

  {
    templateId: 4,
    createdBy: "Deepak",
    fields: [
      {
        type: "CHECKBOX_GROUP",
        _key: "workTimings",
        label: "What work timings they prefer?",
        options: [
          { value: "PERMANENT", label: "Permanent" },
          { value: "PART_TIME", label: "Part Time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
      {
        type: "RADIO_GROUP",
        _key: "jobLevel",
        label: "What job level are they seeking?",
        options: [
          { value: "FULL_TIME", label: "Full time" },
          { value: "INTERNSHIP", label: "Internship" },
        ],
        mandatory: true,
      },
    ],
  },
];
export default templates;
