from jinja2 import Template

def render_email_template(summary_alerts,
          alerts_from_output,
          summary_name,
          summary_id,
          start_date,
          end_date,
         url_domain, user_name="User", company_name="Acme"):
    template = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Report Summary</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Arial", sans-serif;
        line-height: 1.6;
        background-color: #f8fafc;
        color: #334155;
        font-size: 13px;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        text-align: center;
        padding: 2rem 0;
        background-color: #ffffff;
        border-radius: 12px;
        margin-bottom: 2rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .profile-image {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
      }

      .company-title {
        font-size: 13px;
        margin: 1rem 0;
        color: #333333;
      }

      .company-name {
        font-weight: 700;
      }

      .greeting {
        font-size: 13px;
        margin-bottom: 1rem;
        color: #414141;
      }

      .alert {
        background: #ffffff;
        border-radius: 12px;
        margin-bottom: 1.5rem;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .alert-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .alert-number {
        width: 32px;
        height: 32px;
        background: #e0e0e0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 400;
      }

      .divider {
        flex-grow: 1;
        height: 1px;
        background-color: #e0e0e0;
      }

      .client-tag {
        background: #6e6e6e;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        font-size: 13px;
        margin-left: 0.5rem;
      }

      .client-tag-name {
        text: black;
      }

      .alert-content {
        margin-bottom: 1.5rem;
      }

      .cost-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .opportunity-cost {
        color: #27ae60;
        font-weight: 700;
        font-size: 13px;
      }

      .cost-label {
        color: #9f9f9f;
        font-size: 13px;
      }

      .details-box {
        background: #fbf8fd;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .detail-alert {
        margin-bottom: 1rem;
        display: flex;
        gap: 12px;
        align-items: center;
      }

      .detail-label {
        font-weight: 500;
        margin-bottom: 0.25rem;
        color: #1e293b;
      }

      .detail-value {
        color: #64748b;
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }

      .metrics-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
      }

      .metric-alert {
        padding: 0.5rem;
      }

      .metric-value {
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
      }

      .metric-label {
        color: #64748b;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .change {
        color: #eb5757;
        font-weight: 600;
      }

      .action-button {
        display: block;
        text-align: center;
        background: #f3e8ff;
        color: #7e22ce;
        text-decoration: none;
        padding: 1rem;
        border-radius: 8px;
        font-weight: 500;
        transition: background-color 0.2s;
        margin-top: 1rem;
      }

      .action-button:hover {
        background: #ede9fe;
      }

      .red{

      color:red;
      }

      .green{
      color:green
      };



      @media (max-width: 640px) {
        .container {
          padding: 1rem;
        }

        .header {
          padding: 1.5rem 1rem;
        }

        .alert {
          padding: 1rem;
        }

        .metrics-grid {
          grid-template-columns: 1fr;
        }

        .cost-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="header">
        <img
          class="profile-image"
          src="https://images.squarespace-cdn.com/content/v1/617fd048add94a0c8959e684/39be0419-3e5b-4769-89ec-d5ad169adab4/Logo.png?format=1500w"
          alt="Profile"
        />
        <div class="company-title">
          <span class="company-name">Burt</span>
          <span>Intelligence.</span>
        </div>
        <h1 class="greeting">Hi Shivani !</h1>
      </header>

      {% for summary_alert in summary_alerts %} {% for alert in
      summary_alert.total_alerts %}
      <article class="alert">
        <div class="alert-header">
          <div class="alert-number">{{ loop.index }}</div>
          <div class="divider"></div>
          {% for dim in alert.dimension_values %}
          <div class="client-tag">{{ dim }}</div>
          {% endfor %}
        </div>
        <div class="client-tag-name">
          {{alert.metric_change[2]}} Drop in {{alert.alert_metric}}
        </div>

        <div class="alert-content">
          <div class="cost-row">
            <div>
              <div class="opportunity-cost">{{alert.metric_change[0]}}</div>
              <div class="cost-label">Opportunity Cost</div>
            </div>
          </div>
        </div>

        <div class="details-box">
          {% for contribution in alert.alert_contribution[:2] %}
          <div class="detail-alert">
            {% if contribution["contribution"] == 'No Contributors' %}
            <div class="detail-label">{{contribution["contribution"]}}:</div>
            {% else %}
            <div class="detail-label">
              {{",".join(contribution["contribution"])}}:
            </div>
            {% endif %}
            <div class="detail-value">
              {{contribution["contribution_values"][0]}}
            </div>
            <div class="detail-value">
              {{contribution["contribution_values"][1]}}
            </div>
          </div>
          {% endfor %}
          <div class="metrics-grid">
            {% for metric_value in alert.metric_values %}
            <div class="metric-alert">
              <div class="metric-value">
                {{metric_value["metric_value"][0]}} →
                {{metric_value["metric_value"][1]}}
              </div>
             <div class="metric-label">
  {{ metric_value["metric"] }}
  {% if metric_value["metric"] in ["eCPM", "Impressions", "Revenue"] %}
  <span class="change {% if '-' in metric_value["metric_value"][2] %}red{% else %}green{% endif %}">
    ({{ metric_value["metric_value"][2] }})
  </span>
  {% endif %}
</div>
            </div>
            {% endfor %}
          </div>
        </div>

        <a href="https://{{url_domain}}.cuebeat.databeat.io/summaries?id={{summary_id}}&start_date={{start_date}}&end_date={{end_date}}">Click here for viewing Summary info in detail</a>
      </article>
      {% endfor %} {% endfor %}
    </div>
  </body>
</html>


"""


    t = Template(template)

    return t.render(summary_alerts=summary_alerts,
          alerts_from_output=alerts_from_output,
          summary_name=summary_name,
          summary_id=summary_id,
          start_date=start_date,
          end_date=end_date,
          url_domain=url_domain, user_name=user_name, company_name=company_name)

if __name__ == "__main__":
    # Sample data structure from your input
  summary_alerts =  [{'alert_id': 8, 'alert_name': 'Advertiser_Performance_Check', 'total_alerts': [{'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Blank', 'dimension_values': ('Blank',), 'time_entry': None, 'metric_change': ['$315', '$146', '87%'], 'alert_log_id': 9.0, 'alert_type': 'Increase', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['84,763', '52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$3.71', '$-1.46', '-28%'], 'inversion': False}]}, {'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Blank', 'dimension_values': ('Blank',), 'time_entry': None, 'metric_change': ['$315', '$146', '87%'], 'alert_log_id': 9.0, 'alert_type': 'Increase', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['84,763', '52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$3.71', '$-1.46', '-28%'], 'inversion': False}]}, {'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Blank', 'dimension_values': ('Blank',), 'time_entry': None, 'metric_change': ['$315', '$146', '87%'], 'alert_log_id': 9.0, 'alert_type': 'Increase', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Xandr'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display', 'Open Auction'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$146', '87%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-1.46', '-28%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['84,763', '52,205', '160%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$3.71', '$-1.46', '-28%'], 'inversion': False}]}, {'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Mars Inc.', 'dimension_values': ('Mars Inc.',), 'time_entry': None, 'metric_change': ['$23', '$-177', '-89%'], 'alert_log_id': 8.0, 'alert_type': 'Drop', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['5,535', '-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$4.13', '$-0.12', '-3%'], 'inversion': False}]}, {'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Mars Inc.', 'dimension_values': ('Mars Inc.',), 'time_entry': None, 'metric_change': ['$23', '$-177', '-89%'], 'alert_log_id': 8.0, 'alert_type': 'Drop', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['5,535', '-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$4.13', '$-0.12', '-3%'], 'inversion': False}]}, {'id': 8.0, 'alert_time': '2025-01-07', 'alert_name': 'Advertiser_Performance_Check', 'alert_metric': 'Revenue_CAD For Mars Inc.', 'dimension_values': ('Mars Inc.',), 'time_entry': None, 'metric_change': ['$23', '$-177', '-89%'], 'alert_log_id': 8.0, 'alert_type': 'Drop', 'usecase_type': 'Daily', 'cue_metric_inversion': False, 'alert_contribution': [{'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Display'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,338', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Google Adx'], 'contribution_values': ['$-177', '-89%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.12', '-3%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}, {'contribution': ['Preferred Deal'], 'contribution_values': ['$-191', '-90%'], 'contribution_other_alert_metrics': [{'metric': 'Impressions', 'metrics_values': ['-44,650', '-90%'], 'inversion': False}, {'metric': 'eCPM', 'metrics_values': ['$-0.00', '0%'], 'inversion': False}]}], 'metric_values': [{'metric': 'Impressions', 'metric_value': ['5,535', '-41,344', '-88%'], 'inversion': False}, {'metric': 'eCPM', 'metric_value': ['$4.13', '$-0.12', '-3%'], 'inversion': False}]}]}]
  alerts_from_output =[{'name': 'Revenue_CAD', 'vals': ['$301,412', '$-75,108', '-20%']}]
  summary_name = 'Advertiser_Performance_Check'
  summary_id = 1
  start_date ='2024-12-15'
  end_date = '2025-01-15'
  url_domain = "burt"


    # Filter alerts
  filtered_drop_alerts = [
      {
          "alert_id": alert_group["alert_id"],
          "alert_name": alert_group["alert_name"],
          "total_alerts": [
              alert for alert in alert_group["total_alerts"] if alert["alert_type"] == "Drop"
          ]
      }
    for alert_group in summary_alerts
  ]

  def process_alerts(alert_groups):
    """
      Process alerts by removing duplicate contributions, sorting contributions by percentage,
      and retaining only the top 2 contributions.
    
      Args:
        alert_groups (list): List of alert groups to process.
      """
    for alert_group in alert_groups:
        for alert in alert_group["total_alerts"]:
            # Remove duplicates in alert_contribution
              unique_contributions = {}
              for contrib in alert.get("alert_contribution", []):
                  # Create a unique key using contribution and contribution_values
                  key = (tuple(contrib["contribution"]), tuple(contrib["contribution_values"]))
                  if key not in unique_contributions:
                      unique_contributions[key] = contrib

              # Sort contributions by the second value in contribution_values (percentage as float)
              sorted_contributions = sorted(
                  unique_contributions.values(),
                  key=lambda x: float(x["contribution_values"][1].strip('%')),
                  reverse=True
              )

              # Retain only the top 2 contributions
              alert["alert_contribution"] = sorted_contributions[:2]

  # Process the filtered alerts
  process_alerts(filtered_drop_alerts)

  # Render the HTML template
  html_output = render_email_template(
      summary_alerts=filtered_drop_alerts,
      alerts_from_output=alerts_from_output,
      summary_name=summary_name,
      summary_id=summary_id,
      start_date=start_date,
      end_date=end_date,
      url_domain=url_domain
  )

  # Save the rendered HTML to a file
  output_file_path = "output.html"
  with open(output_file_path, "w", encoding="utf-8") as file:
      file.write(html_output)

  print(f"HTML output saved to {output_file_path}")

  print(filtered_drop_alerts)
