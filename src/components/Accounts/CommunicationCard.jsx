export default function CommunicationCard() {
  const messages = [
    {
      title: "Policy Renewal - Auto Insurance 5/15/25",
      status: "NEW",
      from: "Michael Roberts / Apr 5",
      attachments: 3,
    },
    {
      title: "Fwd: New Submission - BPM Real Estate",
      status: "Responded",
      from: "Joshua Dummire / Mar 25",
      attachments: 0,
    },
    {
      title: "New Business: BPM Real Estate Group",
      status: "—",
      from: "Isabell Keller / Feb 28",
      attachments: 6,
    },
  ];

  return (
    <section className="bg-[#161B22] p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">Communication</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="bg-[#0D1117] p-4 rounded-xl shadow text-sm space-y-2 border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  msg.status === "NEW" ? "bg-blue-700" : "bg-gray-600"
                }`}
              >
                {msg.status}
              </span>
              <span>{msg.from}</span>
            </div>
            <p className="font-semibold">{msg.title}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                {msg.attachments} attachments
              </span>
              <button className="text-indigo-400 hover:underline">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
