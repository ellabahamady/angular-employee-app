export interface Group {
    id: number;
    name: string;
    description: string;
}

export const Groups: Group[] = [
    {
        id: 1,
        name: "Retail Banking",
        description: "Handles personal banking services including savings accounts, loans, and credit cards."
    },
    {
        id: 2,
        name: "Corporate Banking",
        description: "Provides banking services to businesses, including loans, credit, and treasury management."
    },
    {
        id: 3,
        name: "Investment Banking",
        description: "Offers financial advisory services, underwriting, and helping companies raise capital."
    },
    {
        id: 4,
        name: "Wealth Management",
        description: "Provides personalized financial planning and investment management services."
    },
    {
        id: 5,
        name: "Risk Management",
        description: "Focuses on identifying, assessing, and mitigating financial risks."
    },
    {
        id: 6,
        name: "Operations",
        description: "Ensures efficient and effective processing of banking transactions and services."
    },
    {
        id: 7,
        name: "Compliance",
        description: "Ensures the bank adheres to all laws, regulations, and internal policies."
    },
    {
        id: 8,
        name: "Technology",
        description: "Develops and maintains the bank's IT infrastructure and digital banking services."
    },
    {
        id: 9,
        name: "Human Resources",
        description: "Manages recruitment, training, and employee welfare within the bank."
    },
    {
        id: 10,
        name: "Marketing",
        description: "Focuses on promoting the bank's services and enhancing its brand image."
    }
]