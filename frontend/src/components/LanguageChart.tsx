import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  repos: any[];
};

const LanguageChart = ({ repos }: Props) => {
  const langCount: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });

  const data = Object.entries(langCount).map(([name, value]) => ({
    name,
    value,
  }));

  if (data.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xs uppercase tracking-widest text-white/50 mb-6">
        Language Usage
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LanguageChart;
